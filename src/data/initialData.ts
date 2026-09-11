import { Category, MonthlyChartData, NotificationItem, SavingsGoal, Transaction, UserProfile } from '../types';

// Profil vide — sera rempli depuis l'API après connexion
export const initialUserProfile: UserProfile = {
  name: '',
  email: '',
  phone: '',
  avatar: '',
  currency: 'FCFA',
  language: 'Français',
  timezone: 'GMT +00:00',
  dateFormat: 'DD/MM/YYYY',
  plan: 'WealthFlow Free',
  pinCode: '',
  isPinEnabled: false,
  isLocked: false,
  autoLockMinutes: 15,
};

// Données initiales vides — les vraies données viennent du backend API (Render + Supabase)
export const initialCategories: Category[] = [];

export const initialTransactions: Transaction[] = [];

export const initialSavingsGoals: SavingsGoal[] = [];

export const initialNotifications: NotificationItem[] = [];

// Données de graphique initiales (placeholder visuel uniquement)
export const initialChartData: MonthlyChartData[] = [
  { month: 'Janv.', fullMonth: 'Janvier', revenus: 0, depenses: 0, epargne: 0 },
  { month: 'Févr.', fullMonth: 'Février', revenus: 0, depenses: 0, epargne: 0 },
  { month: 'Mars', fullMonth: 'Mars', revenus: 0, depenses: 0, epargne: 0 },
  { month: 'Avr.', fullMonth: 'Avril', revenus: 0, depenses: 0, epargne: 0 },
  { month: 'Mai', fullMonth: 'Mai', revenus: 0, depenses: 0, epargne: 0 },
  { month: 'Juin', fullMonth: 'Juin', revenus: 0, depenses: 0, epargne: 0 },
  { month: 'Juil.', fullMonth: 'Juillet', revenus: 0, depenses: 0, epargne: 0 },
  { month: 'Août', fullMonth: 'Août', revenus: 0, depenses: 0, epargne: 0 },
  { month: 'Sept.', fullMonth: 'Septembre', revenus: 0, depenses: 0, epargne: 0 },
  { month: 'Oct.', fullMonth: 'Octobre', revenus: 0, depenses: 0, epargne: 0 },
  { month: 'Nov.', fullMonth: 'Novembre', revenus: 0, depenses: 0, epargne: 0 },
  { month: 'Déc.', fullMonth: 'Décembre', revenus: 0, depenses: 0, epargne: 0 },
];
