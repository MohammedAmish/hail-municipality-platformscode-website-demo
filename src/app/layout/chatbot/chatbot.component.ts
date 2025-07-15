import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent {
  showSuggestions = true;
  chatOpen = false;
  userInput = '';
  messages: { text: string, from: 'user' | 'bot' }[] = [];

  currentDate = new Date().toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  constructor(private translate: TranslateService) {}

  toggleChat() {
    this.chatOpen = !this.chatOpen;
  }

  sendTranslatedSuggestion(key: string) {
    const localized = this.translate.instant(key);
    this.sendSuggested(localized);
  }

  sendSuggested(text: string) {
    this.addMessage(text, 'user');
    this.botReply(text);
    this.showSuggestions = false;
  }

  sendMessage() {
    if (!this.userInput.trim()) return;
    this.addMessage(this.userInput, 'user');
    this.botReply(this.userInput);
    this.userInput = '';
  }

  addMessage(text: string, from: 'user' | 'bot') {
    this.messages.push({ text, from });
    setTimeout(() => {
      const el = document.getElementById('chatMessages');
      if (el) el.scrollTop = el.scrollHeight;
    }, 100);
  }

  botReply(userText: string) {
    const lowerText = userText.toLowerCase();
    const isArabic = /[\u0600-\u06FF]/.test(userText);
    let replyKey = 'CHATBOT.help';

    // English intent
    if (!isArabic) {
      if (lowerText.includes('services')) {
        replyKey = 'CHATBOT.reply-services';
      } else if (lowerText.includes('trending')) {
        replyKey = 'CHATBOT.reply-trending';
      } else if (lowerText.includes('browsing')) {
        replyKey = 'CHATBOT.reply-browsing';
      } else if (lowerText.includes('municipality') || lowerText.includes('municipalities')) {
        replyKey = 'CHATBOT.reply-municipalities';
      }
    }

    // Arabic intent
    if (isArabic) {
      if (userText.includes('خدمات')) {
        replyKey = 'CHATBOT.reply-services';
      } else if (userText.includes('الشائع') || userText.includes('الرائج')) {
        replyKey = 'CHATBOT.reply-trending';
      } else if (userText.includes('تصفح') || userText.includes('استعراض')) {
        replyKey = 'CHATBOT.reply-browsing';
      } else if (userText.includes('بلدية') || userText.includes('بلديات')) {
        replyKey = 'CHATBOT.reply-municipalities';
      }
    }

    const reply = this.translate.instant(replyKey);
    setTimeout(() => this.addMessage(reply, 'bot'), 500);
  }
}
