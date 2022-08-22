import { Experience } from "@/components/experience";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  current?: string;
}
export interface Curriculum {
  personalData: PersonalData;
  goals: string;
  formation?: Formation[];
  experience: Experience[];
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
  ],
};

const curriculum = createSlice({
  name: "curriculum",
  initialState: initial_state,
  reducers: {
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
    AddExperience(state) {
      const data = state.experience;
      data.sort((a, b) => a.id - b.id);
      console.log(data);

      return {
        ...state,
        experience: [
          ...state.experience,
          {
            id: state.experience[state.experience.length - 1].id + 1,
            company_name: "",
            role_description: "",
            role_name: "",
          },
        ],
      };
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
  AddExperience,
  changeExperience,
  removeExperience,
} = curriculum.actions;

export function useCurriculum(state: any) {
  return state.curriculum as Curriculum;
}
