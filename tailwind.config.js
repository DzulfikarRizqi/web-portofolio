export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
        container: {
            center: true, // Menengahkan container
            padding: '1rem', // Memberi padding kiri-kanan 1rem (16px)
        },
        extend: {
            fontFamily: {
                'inter': ['Inter'],  // Tambahkan font dari Google Fonts
                'exo': ['Exo'],
            },
        },
    },
    plugins:[],
  };