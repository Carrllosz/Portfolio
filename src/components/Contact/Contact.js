import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import computador from "../../assets/computador.png";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [popUpStatus, setPopUpStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
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
      );

      setPopUpStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Erro ao enviar:", error);
      setPopUpStatus("error");
    }
  };

  return (
    <div className="w-full min-h-screen flex bg-[#141414] justify-center items-end px-4 py-10">
      <div className="w-full bg-transparent border-2 border-white rounded-lg p-6 md:p-10 shadow-lg">

        <h1 className="text-3xl text-white mb-4 text-start">Contato</h1>
        <div className="border-t border-white/40 w-full mb-4"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src={computador}
            alt="Imagem de Contato"
            className="w-full md:w-80 h-90 object-cover rounded-md mx-auto"
          />

          <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-[#F4F3EF] font-medium">Nome Completo</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Digite seu nome"
                className="w-full bg-transparent border-b border-gray-300 outline-none text-[#F4F3EF] placeholder-gray-400 mt-2 p-2"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-[#F4F3EF] font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Digite seu email"
                  className="w-full bg-transparent border-b border-gray-300 outline-none text-[#F4F3EF] placeholder-gray-400 mt-2 p-2"
                  required
                />
              </div>
              <div>
                <label className="text-[#F4F3EF] font-medium">Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Digite seu telefone"
                  className="w-full bg-transparent border-b border-gray-300 outline-none text-[#F4F3EF] placeholder-gray-400 mt-2 p-2"
                />
              </div>
            </div>

            <div>
              <label className="text-[#F4F3EF] font-medium">Mensagem</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Digite sua mensagem"
                className="w-full bg-transparent border-b border-gray-300 outline-none text-[#F4F3EF] placeholder-gray-400 mt-2 p-2 resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center text-[#F4F3EF] hover:text-[#FF5B23] px-4 py-2 rounded-md transition"
            >
              <span className="mr-2">Enviar</span>
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </form>
        </div>

        {popUpStatus && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white text-black p-6 rounded-md shadow-lg text-center">
              <p className="text-lg font-semibold">
                {popUpStatus === "success"
                  ? "E-mail enviado com sucesso!"
                  : "Erro ao enviar. Tente novamente."}
              </p>
              <button
                className="mt-4 bg-black hover:bg-[#FF5B23] text-white px-4 py-2 rounded-md transition"
                onClick={() => setPopUpStatus(null)}
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
