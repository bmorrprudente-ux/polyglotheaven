# Telar — Cuentos Políglotas (Polyglot Language Learning App)

Telar es una aplicación interactiva diseñada para el aprendizaje simultáneo y comparativo de múltiples idiomas y variantes dialectales a través de microcuentos situacionales y dramáticos.

---

## 🌟 Características Principales

1. **Lectura Paralela Multilingüe:**
   - Visualiza y compara oraciones completas y alineadas en decenas de idiomas y variantes dialectales simultáneamente.
   - Variantes del español (España, México, República Dominicana, Argentina, Colombia, Chile, etc.), inglés (EE. UU., Reino Unido, Escocia, etc.), francés (Francia, Costa de Marfil, RD del Congo, etc.), portugués, árabe, chino, japonés, lenguas originarias y familias lingüísticas globales.

2. **Modo Diálogo (Code-Switching):**
   - Lectura fluida con alternancia de código dinámica y reparto de personajes (Hugo, Clara, Don Ramón, Mateo, Bea) con asignación personalizada de idiomas.

3. **Gira Mundial (World Tour):**
   - Mapa interactivo con marcadores geográficos para explorar historias situadas en diferentes rincones del planeta con personajes locales.

4. **Audio Natural y Dialectal:**
   - Reproducción de audio con voces naturales y diferenciación de género y dialecto por personaje.
   - Control de velocidad de reproducción (0.75x, 1.0x, 1.25x) y avance automático.

5. **Transcripción Fonética AFI / IPA:**
   - Alterna la visualización de la pronunciación fonética internacional para desmitificar sonidos regionales.

6. **Inspector de Palabras & Explicador con IA (Google Gemini):**
   - Haz clic en cualquier vocablo para obtener su definición contextual, lema, categoría gramatical, pronunciación IPA y equivalentes traducidos en todas las lenguas seleccionadas.
   - Integración opcional con Google Gemini (`gemini-2.0-flash` / `gemini-1.5-flash`) con respaldo léxico integrado.

7. **Rastreador de Vocabulario y Logros:**
   - Registro automático de palabras encontradas y metas políglotas desbloqueables.

8. **Modo Claro y Modo Oscuro:**
   - Interfaz de alto contraste optimizada para largas sesiones de estudio tanto de día como de noche.

---

## 🚀 Inicio Rápido

### Requisitos
- Node.js (versión 18 o superior)
- npm

### Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo local
npm run dev
```

Abre tu navegador en `http://localhost:3000/`.

### Construcción para Producción

```bash
npm run build
npm run preview
```

---

## 🛠️ Tecnologías

- **Framework:** React 18 con TypeScript
- **Empaquetador:** Vite
- **Estilos:** Tailwind CSS con temas dinámicos
- **Iconografía:** Lucide React
- **IA:** API de Google Gemini (opcional, configurable en Ajustes)
