## 🛠️ Halaman Login CMS – Proyek Medpoint

### 📋 Deskripsi  
Aplikasi CMS ini digunakan untuk mengatur dan mengelola data dalam sistem Medpoint. Untuk melakukan pengelolaan data, pengguna harus melakukan **autentikasi/login** terlebih dahulu. Halaman **Login** ini dibuat sebagai pintu masuk ke sistem dan hanya memperbolehkan login untuk pengguna yang sudah terdaftar di **Supabase**.

---
### 🔐 Halaman Login  
- Dibuat sesuai desain yang telah diberikan  
- Hanya menerima login dari pengguna yang sudah ada di **Supabase**  
- Setelah berhasil login, pengguna diarahkan ke **Dashboard**  
- Di Dashboard akan tampil nama/email pengguna yang berhasil login  
---

### 🧩 Penjelasan Komponen

### ✅ Komponen Tombol (Button)  
Tombol dibuat reusable dengan properti sebagai berikut:  
- `label`: *Teks pada tombol*  
- `onClick`: *Fungsi saat tombol diklik*  
- `variant`: *Jenis tampilan tombol* (`primary`, `secondary`, `danger`, dll)  
- `size`: *Ukuran tombol* (`small`, `medium`, `large`)  
- `disabled`: *Untuk menonaktifkan tombol*  
- `icon`: *(Opsional)* Ikon yang ditampilkan di dalam tombol  
- `style`: *Custom style* untuk menimpa style bawaan  
---
### 🔄 Life Cycle
1. **Saat Komponen Dimuat (`useEffect`)**
   - Mengecek apakah sudah ada sesi login pengguna  
   - Jika ada, langsung diarahkan ke halaman Dashboard  
2. **Saat Login**
   - Memanggil `supabase.auth.signInWithPassword()`  
   - Jika berhasil → diarahkan ke Dashboard  
   - Jika gagal → menampilkan pesan error  
3. **Saat Dashboard Dimuat**
   - Menampilkan nama/email pengguna yang sedang login  
---
### 🧪 Teknologi yang Digunakan
- **React JS**
- **Tailwind CSS**
- **Supabase Auth**
- **React Router DOM**
---
===================================================================================================
### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
>>>>>>> 655eacf (Add login feature)
