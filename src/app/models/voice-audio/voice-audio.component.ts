import { Component, OnInit } from '@angular/core';
import { RecordServiceService } from 'src/app/shared/record-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-voice-audio',
  templateUrl: './voice-audio.component.html',
  styleUrls: ['./voice-audio.component.css']
})
export class VoiceAudioComponent implements OnInit {

  public audioData!: ArrayBuffer;

  constructor(
    public _recordRTC: RecordServiceService,
    private http: HttpClient
  ){}



  ngOnInit() {
  }
  responseMessage: string = '';
  selectedFile!: File;


  uploadFile(event: any): void {
    let files = event.target.files[0];
    const formData = new FormData();
    formData.append('audio', files, files.name);
    
  
    this.http.post('http://127.0.0.1:8000/whisper', formData).subscribe(
      (response: any) => {
        this.responseMessage = response.command;
        console.log(this.responseMessage.toString());
      },
      (error) => {
        // Handle any errors
      }
    );
  }

  startVoiceRecord() {
    this._recordRTC.toggleRecord().then ((res: any) => {
  console.log(res);
      this.resolveBlobFromBlobUrl(res).then((blob: Blob) => {
        const formData = new FormData();
        formData.append('audio', blob, 'audio.wav'); // 'audio.wav' is the desired filename on the server
  
        // Send the FormData containing the Blob to the FastAPI server
        const url = 'http://127.0.0.1:8000/gapi'; // Replace with your server URL
        this.http.post(url, formData, {
          headers: new HttpHeaders({}),
        }).subscribe(
          (response: any) => {
            this.responseMessage = response.command;
            console.log('Server response:', this.responseMessage.toString());
          
          },
          (error) => {
            // Handle errors if the request fails
            console.error('Error:', error);
          }
        );
      });
    })
    
    
  }

  convertFileToBytecode(file: File) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const arrayBuffer = e.target?.result as ArrayBuffer;

      // Now you have the file data as an ArrayBuffer.
      // You can convert it to bytecode as needed.
      // For example, you can use the DataView or TypedArray APIs.
      // The specific conversion depends on your requirements.
    };

    reader.readAsArrayBuffer(file);
  }

  resolveBlobFromBlobUrl(blobUrl: string): Promise<Blob> {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response);
        }
      };
      xhr.open('GET', blobUrl);
      xhr.send();
    });
  }

}

