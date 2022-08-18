import { Experience } from "@/components/experience";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Steps {
  personalData: boolean;
  goals: boolean;
  experience: boolean;
}
interface PersonalData {
  name: string;
  email: string;
  telefone: string;
  current_role?: string;
  linkedin?: string;
}

interface Formation {
  institution: string;
  course: string;
  ini_course: string;
  fin_course?: string;
}

interface Experience {
  id: number;
  company_name: string;
  role_name: string;
  role_description: string;
  ini_role?: string;
  fin_role?: string;
  current?: boolean;
}
export interface Curriculum {
  personalData: PersonalData;
  goals: string;
  formation?: Formation[];
  experience: Experience[];
  steps: Steps;
}

const initial_state: Curriculum = {
  personalData: {
    name: "",
    email: "",
    telefone: "",
    current_role: "",
    linkedin: "",
  },
  goals: "",
  experience: [
    {
      id: 1,
      company_name: "",
      role_description: "",
      role_name: "",
    },
    {
      id: 2,
      company_name: "",
      role_description: "",
      role_name: "",
    },
  ],
  steps: {
    personalData: false,
    goals: false,
    experience: false,
  },
};

const curriculum = createSlice({
  name: "curriculum",
  initialState: initial_state,
  reducers: {
    changeStep(
      state,
      { payload }: PayloadAction<{ key: string; value: boolean }>
    ) {
      return {
        ...state,
        steps: { ...state.steps, [payload.key]: payload.value },
      };
    },
    setPersonalData(
      state,
      { payload }: PayloadAction<{ key: string; value: string }>
    ) {
      return {
        ...state,
        personalData: {
          ...state.personalData,
          [payload.key]: payload.value,
        },
      };
    },
    setGoals(state, { payload }: PayloadAction<string>) {
      return { ...state, goals: payload };
    },
    AddExperience(state, { payload }: PayloadAction<Experience>) {
      return { ...state, experience: [...state.experience, payload] };
    },
    changeExperience(
      state,
      { payload }: PayloadAction<{ id: number; key: string; value: string }>
    ) {
      return {
        ...state,
        experience: state.experience.map((exp: Experience) =>
          exp.id === payload.id ? { ...exp, [payload.key]: payload.value } : exp
        ),
      };
    },
    removeExperience(state, { payload }: PayloadAction<number>) {
      return {
        ...state,
        experience: state.experience.filter((exp) => exp.id !== payload),
      };
    },
  },
});

export default curriculum.reducer;
export const {
  setPersonalData,
  setGoals,
  changeStep,
  AddExperience,
  changeExperience,
  removeExperience,
} = curriculum.actions;

export function useCurriculum(state: any) {
  return state.curriculum as Curriculum;
}
