import React, { useState } from "react";
import { createModal, destroyModal } from "../utils/modal";
import Header from "./components/header";

const LoginModal = ({data,close}) => {
    const [search,setSearch]=useState("")
  return (
    <div className="w-[500px]">
      <Header title="Giriş Yap" />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <p>
            Aranan Kelime :{search}
        </p>
      <button
        onClick={() => {
          createModal("register", { name: "Yusuf", surname: "Demir",setSearch });
        }}
      >
        Register Modalı Yükle
      </button>
      <br />
      <button onClick={close}>Kapat</button>
    </div>
  );
};

export default LoginModal;
