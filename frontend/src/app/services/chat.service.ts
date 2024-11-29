import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private socket: Socket;

  constructor() {
    // Connect to the backend Socket.IO server
    this.socket = io('http://localhost:5001'); // Use the backend's URL and port
  }

  // Send a message to the server
  sendMessage(message: string): void {
    this.socket.emit('message', message);
  }

  // Listen for incoming messages
  getMessages(): Observable<string> {
    return new Observable((observer) => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });

      // Handle cleanup when the Observable is unsubscribed
      return () => {
        this.socket.disconnect();
      };
    });
  }
}
