export interface ContactItem {
  id: string;
  label: string;
  href: string;
  type: 'linkedin' | 'instagram' | 'github' | 'email' | 'whatsapp';
}

export const contacts: ContactItem[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bruno-henrique-da-silva-mosko/',
    type: 'linkedin',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/bronohenrique/#',
    type: 'instagram',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/Broninn/',
    type: 'github',
  },
  {
    id: 'email',
    label: 'E-mail',
    href: 'bruno-hs@outlook.com',
    type: 'email',
  },
];
