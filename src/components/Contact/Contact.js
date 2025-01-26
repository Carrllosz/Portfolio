import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ArrowDownLeftIcon } from "@heroicons/react/24/outline";
import computador from "../../assets/computador.png";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isPopUpVisible, setIsPopUpVisible] = useState(null); // Estado para controlar o pop-up de sucesso/erro

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      from_name: form.name,
      to_name: "João Carlos",
      message: form.message,
      user_email: form.email,
      user_phone: form.phone,
    });

    emailjs
      .send(
        "service_psui2td",
        "template_t8yoovo",
        {
          from_name: form.name,
          to_name: "João Carlos",
          message: form.message,
          user_email: form.email,
          user_phone: form.phone,
        },
        "d5uVLyaWgOJB2LWEy"
      )
      .then(
        (response) => {
          setIsPopUpVisible("success"); // Exibe pop-up de sucesso
          setForm({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          setIsPopUpVisible("error"); // Exibe pop-up de erro
          console.error("Erro:", error);
        }
      );
  };

  return (
    <div className="w-full min-h-screen bg-[#141414] flex justify-center items-start p-4">
      <div className="max-w-6xl w-full border-2 border-[#F4F3EF] rounded-md">
        <div className="flex items-center justify-between p-6 md:p-10">
          <h1 className="text-6xl md:text-6xl lg:text-8xl font-thin text-[#F4F3EF]">
            Contato
          </h1>
          <ArrowDownLeftIcon className="w-24 h-24 text-[#F4F3EF]" />
        </div>

        <div>
          <div className="border border-gray-300"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
          <div className="flex justify-center">
            <img
              src={computador}
              alt="Imagem de Contato"
              className="w-80 h-80 object-cover rounded-md"
            />
          </div>

          <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="text-[#F4F3EF] font-medium">Nome Completo</label>
              <div className="border-b border-gray-300 mt-2">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Digite seu nome"
                  className="w-full bg-transparent outline-none text-[#F4F3EF] placeholder-gray-400"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="text-[#F4F3EF] font-medium">Email</label>
                <div className="border-b border-gray-300 mt-2">
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Digite seu email"
                    className="w-full bg-transparent outline-none text-[#F4F3EF] placeholder-gray-400"
                    required
                  />
                </div>
              </div>
              <div className="relative">
                <label className="text-[#F4F3EF] font-medium">Telefone</label>
                <div className="border-b border-gray-300 mt-2">
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Digite seu telefone"
                    className="w-full bg-transparent outline-none text-[#F4F3EF] placeholder-gray-400"
                  />
                </div>
              </div>
            </div>

            <div className="relative">
              <label className="text-[#F4F3EF] font-medium">Mensagem</label>
              <div className="border-b border-gray-300 mt-2">
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Digite sua mensagem"
                  className="w-full bg-transparent outline-none text-[#F4F3EF] placeholder-gray-400"
                  required
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center text-[#F4F3EF] hover:text-[#FF5B23] px-4 py-2 rounded-md"
              >
                <span className="mr-2">Enviar</span>
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {isPopUpVisible && (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-gray-300 bg-opacity-50 flex justify-center items-center`}
        >
          <div
            className={`bg-white text-black p-6 rounded-md shadow-lg text-center ${
              isPopUpVisible === "success" ? "bg-[#F4F3EF]" : "bg-red-500"
            }`}
          >
            <p className="text-xl font-semibold">
              {isPopUpVisible === "success"
                ? "E-mail enviado com sucesso!"
                : "Erro ao enviar o e-mail. Tente novamente mais tarde."}
            </p>
            <button
              className="mt-4 bg-black hover:bg-[#FF5B23] text-white px-4 py-2 rounded-md"
              onClick={() => setIsPopUpVisible(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
