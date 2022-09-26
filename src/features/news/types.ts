export interface INoticiasDisponiveis {
    id: number;
    titulo: string;
    date: number | string;
    description: string;
    premium: boolean;
    image: string;
    descriptionCurto?: string;
  }