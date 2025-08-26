#!/bin/bash

# Script para copiar solo el contenido de dist a public_html
# Este script se ejecuta después de hacer git pull

echo "Iniciando deployment..."

# Verificar que estamos en el directorio correcto
if [ ! -d "dist" ]; then
    echo "Error: No se encontró la carpeta dist"
    exit 1
fi

# Crear backup de public_html actual
if [ -d "public_html" ]; then
    echo "Creando backup de public_html..."
    cp -r public_html public_html_backup_$(date +%Y%m%d_%H%M%S)
fi

# Limpiar public_html
echo "Limpiando public_html..."
rm -rf public_html/*

# Copiar solo el contenido de dist a public_html
echo "Copiando contenido de dist a public_html..."
cp -r dist/* public_html/

echo "Deployment completado exitosamente!"
echo "El contenido de dist ha sido copiado a public_html"
