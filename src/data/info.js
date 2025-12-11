import { ShieldCheck, TrendingUp, Users, Wallet } from 'lucide-react';

export const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Contacto', href: '#contacto' },
];

export const services = [
  { title: 'Ahorro Seguro', desc: 'Tu futuro garantizado con las mejores tasas.', icon: Wallet },
  { title: 'Créditos Ágiles', desc: 'Financiamiento rápido para tus metas.', icon: TrendingUp },
  { title: 'Seguros', desc: 'Protección total para ti y tu familia.', icon: ShieldCheck },
  { title: 'Inversiones', desc: 'Haz crecer tu capital con nosotros.', icon: Users },
];