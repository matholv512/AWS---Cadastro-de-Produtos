import { React, useState } from "react";

export default function FileUpload() {
  return (
    <form method="post" encType="multipart/form-data" action="/upload">
      <div className="App">
        <label id="uploadLabel">
          Upload de imagem <span>*</span>
          <br />
          <span>Enviar um arquivo ZIP</span>
          <input
            required
            id="uploadFile"
            name="uploadFile"
            type="file"
            accept=".zip,.rar,.7zip"
          />
        </label>
        <button id="buttonUpload" type="submit">
          Enviar arquivos
        </button>
      </div>
    </form>
  );
}
