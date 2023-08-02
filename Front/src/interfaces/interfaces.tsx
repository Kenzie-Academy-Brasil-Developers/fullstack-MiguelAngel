import { ReactNode, Dispatch, SetStateAction } from "react";
import {
  ContactResponse,
  IContact,
  TContactUpdate,
} from "../components/forms/addContact/schemaContact";
import { TLogin } from "../components/forms/login/schemaLogin";
import { TRegister } from "../components/forms/register/schemaRegister";
import { z } from "zod";

export interface ChildProps {
  children: ReactNode;
}

export interface IContactContext {
  setModalContact: React.Dispatch<React.SetStateAction<boolean>>;
  modalContact: boolean;
  createContact: (data: IContact) => Promise<void>;
  contacts: ContactResponse[];
  updateContact: (data: TContactUpdate, id: number) => Promise<void>;
  deleteContact: (id: number) => Promise<void>;
  modalUpdate: boolean;
  setModalUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  currentContact: ContactResponse | null;
  setCurrentContact: (contact: ContactResponse | null) => void;
}

type SetBooleanAction = Dispatch<SetStateAction<boolean>>;

export interface IContextLogin {
  login: boolean;
  setLogin: SetBooleanAction;
  register: boolean;
  setRegister: SetBooleanAction;
  signIn: (data: TLogin) => Promise<void>;
}

export interface IUserContext {
  createUser: (data: TRegister) => Promise<void>;
  profile: IProfile | undefined;
  showProfile: boolean;
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
  updateUser: (data: TProfileUpdate) => Promise<void>;
  modalUpdateUser: boolean;
  setModalUpdateUser: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUser: () => Promise<void>;
  desconect: () => void;
}

export const schemaProfile = z.object({
  email: z.string(),
  phone: z.string(),
  full_name: z.string(),
});

export const schemaProfilePartial = schemaProfile.partial();

export type IProfile = z.infer<typeof schemaProfile>;
export type TProfileUpdate = z.infer<typeof schemaProfilePartial>;
