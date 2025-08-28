export interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
}

export interface WelcomeMessage {
  id: string;
  role: 'welcome';
  content: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  fullTextLink: string;
}
