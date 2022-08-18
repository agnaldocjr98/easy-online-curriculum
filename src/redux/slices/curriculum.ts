import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Steps {
  personalData: boolean;
  goals: boolean;
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
  company_name: string;
  role_name: string;
  role_description: string;
  ini_role: string;
  fin_role?: string;
}
export interface Curriculum {
  personalData: PersonalData;
  goals: string;
  formation?: Formation[];
  experience?: Experience[];
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
  steps: {
    personalData: false,
    goals: false,
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
  },
});

export default curriculum.reducer;
export const { setPersonalData, setGoals, changeStep } = curriculum.actions;

export function useCurriculum(state: any) {
  return state.curriculum as Curriculum;
}
