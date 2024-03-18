import { create } from 'zustand';
import { ProfileFormType } from '../types/ProfileType';

type UserStateType = {
  user: ProfileFormType;
  setUser: (user: ProfileFormType) => void;
};

export const useAuthStore = create<UserStateType>((set) => ({
  user: {
    username: null,
    first_name: null,
    last_name: null,
    city: null,
    avatar: null,
  },
  setUser: (user) => set((state) => ({ ...state, user })),
}));
