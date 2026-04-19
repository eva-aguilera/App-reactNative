# App de Autenticación - React Native (Expo)

## 📝 Descripción del proyecto
Este proyecto es una aplicación móvil desarrollada con **React Native** y **Expo Router**. La aplicación implementa un flujo de autenticación básico pero robusto, enfocado en la experiencia de usuario y el manejo de estados de navegación.

### Funcionalidades:
- **Pantalla de Login:** Formulario con validación de campos, manejo de estados para email y contraseña.
- **Seguridad visual:** Uso de `secureTextEntry` para proteger la visibilidad de la contraseña.
- **Manejo de Errores:** Mensajes de alerta dinámicos cuando las credenciales son incorrectas.
- **Navegación Dinámica:** Redirección automática a la pantalla de perfil al iniciar sesión con éxito, enviando datos del usuario entre rutas.

---

## 🛠️ Tecnologías Utilizadas
- **React Native**
- **Expo Router** (Navegación basada en archivos)
- **TypeScript**
- **StyleSheet** (Diseño nativo)

---

## 🚀 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/TU_USUARIO/app-react-native.git](https://github.com/TU_USUARIO/app-react-native.git)

Entrar a la carpeta del proyecto:

Bash
cd app-react-native
Instalar las dependencias:

Bash
npm install
Iniciar el servidor de desarrollo:

Bash
npx expo start
Nota: Para visualizar la app, puedes usar el emulador de Android/iOS o escanear el código QR con la aplicación Expo Go en tu dispositivo móvil.

---

## 🎥 Video Demostrativo

👉 [Ver video demostrativo aquí] -> https://youtu.be/iVa5-KqSqW8



🤖 Uso de Inteligencia Artificial (IA)
Para el desarrollo de esta aplicación, se contó con la asistencia de la IA Gemini (Google) como peer-programmer.

Herramientas y Metodología:
Herramienta: Gemini 3 Flash.

Asistencia técnica: Se utilizó para la depuración de errores críticos de configuración y la optimización de componentes.

Consultas y Prompts realizados:
Resolución de Errores: Consultas sobre errores de configuración de Layout children y problemas de importación de módulos (Invariant Violation).

Desarrollo de Interfaz: "Ayúdame a crear un login simple con TextInput y TouchableOpacity".

Lógica de Navegación: "¿Cómo pasar parámetros (email) entre pantallas usando useLocalSearchParams en expo-router?".

Depuración de Código: Revisión de sintaxis en el archivo profile.tsx para corregir rutas de importación incorrectas desde la carpeta .expo.

📁 Estructura del Proyecto (Puntos clave)
/app/index.tsx: Pantalla principal de Login.

/app/(tabs)/profile.tsx: Pantalla de destino que recibe los datos del usuario.

_layout.tsx: Configuración global de la navegación.

Desarrollado por: [Eva aguilera]

Fecha: 19 de Abril 2026