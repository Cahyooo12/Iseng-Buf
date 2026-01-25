import React, { useState } from 'react';

const Testimonials: React.FC = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      // Use environment variable for API URL or fallback to relative path for dev proxy
      const apiBase = import.meta.env.VITE_API_BASE_URL || '/api';
      const response = await fetch(`${apiBase}/kirim_pesan.php`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        throw new Error('Something went wrong');
      }

      const result = await response.json();

      if (response.status === 201) {
        setSuccess(true);
        setFormData({ nama: '', email: '', pesan: '' });
        setTimeout(() => setSuccess(false), 5000); // Hide success message after 5 seconds
      } else {
        throw new Error(result.message || 'An unknown error occurred');
      }

    } catch (err) {
      console.error("Submission error:", err);
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Bagikan Kesanmu!</h3>
          <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Kami senang mendengar masukan darimu. Silakan tinggalkan pesan, kesan, atau pertanyaanmu di bawah ini.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama</label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Nama Lengkap"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="alamat@email.com"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="pesan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pesan</label>
              <textarea
                id="pesan"
                name="pesan"
                rows={4}
                value={formData.pesan}
                onChange={handleChange}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Tuliskan pesanmu di sini..."
              ></textarea>
            </div>
            {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
            {success && <p className="text-green-500 text-sm text-center mb-4">Terima kasih! Pesan Anda berhasil dikirim.</p>}
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
                disabled={submitting}
              >
                {submitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
