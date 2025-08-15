import { useState } from "react";
import emailjs from "emailjs-com";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_f9qq4qd",     // Remplace par ton Service ID
        "template_ax82zrs",    // Remplace par ton Template ID
        formData,
        "rpRt9KbEaMBgwKoVu"       // Remplace par ta Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message envoyé avec succès !");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          alert("Erreur lors de l'envoi. Réessayez.");
        }
      );
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Contactez-moi</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nom */}
        <div>
          <label className="block text-gray-700">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            placeholder="Votre nom"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            placeholder="Votre email"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            placeholder="Votre message"
          ></textarea>
        </div>

        {/* Bouton */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
          style={{cursor:"pointer"}}
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
