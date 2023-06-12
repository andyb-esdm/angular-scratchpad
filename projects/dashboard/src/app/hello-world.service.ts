import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {
  names = ['Andy', 'Katrina'];

  private prompts = [
    'desert,lizard',
    'cute,spider',
    'cat,stretch',
    'beautiful,view',
    'dog,smile'
  ];

  getPrompt(): string {
    return this.prompts[Math.floor(Math.random() * this.prompts.length)];
  }
}
