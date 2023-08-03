import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { TRegister } from "../components/forms/register/schemaRegister";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./loginContext";
import {
  ChildProps,
  IProfile,
  IUserContext,
  TProfileUpdate,
} from "../interfaces/interfaces";
import { toast } from "react-toastify";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: ChildProps) => {
  const { setLogin, setRegister } = useContext(LoginContext);
  const [profile, setProfile] = useState<IProfile | undefined>();
  const [showProfile, setShowProfile] = useState(false);
  const [modalUpdateUser, setModalUpdateUser] = useState(false);

  const navigate = useNavigate();
  const createUser = async (data: TRegister) => {
    try {
      /* eslint-disable @typescript-eslint/no-unused-vars */
      const response = await api.post("/users", data);
      setRegister(false);
      setLogin(true);
      toast.success("Conta criada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Email incorreto ou ja existe!");
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@token");
    if (!token) {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("@token");
    if (token) {
      const getProfileData = async () => {
        try {
          const response = await api.get<IProfile>("users/profile", {
            headers: { Authorization: "Bearer: " + token },
          });
          setProfile(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      getProfileData();
    }
  });

  const updateUser = async (data: TProfileUpdate) => {
    const token = localStorage.getItem("@token");
    if (token) {
      try {
        const response = await api.patch("users/profile", data, {
          headers: {
            Authorization: "Bearer: " + token,
          },
        });

        setProfile(response.data);
        toast.success("Informações alteradas!");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const deleteUser = async () => {
    const token = localStorage.getItem("@token");
    if (token) {
      try {
        const response = await api.delete("users/profile", {
          headers: {
            Authorization: "Bearer: " + token,
          },
        });
        localStorage.clear();
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const desconect = () => {
    localStorage.clear();
    navigate("/");
    toast.warning("Você foi deslogado!");
  };

  return (
    <UserContext.Provider
      value={{
        createUser,
        profile,
        showProfile,
        setShowProfile,
        updateUser,
        modalUpdateUser,
        setModalUpdateUser,
        deleteUser,
        desconect,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
