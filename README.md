# lab01-iac-jueves

Bienvenidos a IAC, en esta actividad se desarrolló lo siguiente:

1. creación de la carpeta api dentro de src, en esa carpeta incluimos un Dockerfile y un index.js
en la carpeta colocamos los codigos, y luego se ejecutan los siguientes comandos para el Dockerfile:
 docker build -t lab/api .
 docker run -p 3000:3000 lab/api
Luego, se ejecutan los siguientes para index.js:
 node index.js
2. Entrar a la carpeta iac, e instalar el terrafor con los siguientes comandos:
 sudo apt-get update && sudo apt-get install -y gnupg software-properties-common
 wget -O- https://apt.releases.hashicorp.com/gpg | \
gpg --dearmor | \
sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg > /dev/null

 gpg --no-default-keyring \
--keyring /usr/share/keyrings/hashicorp-archive-keyring.gpg \
--fingerprint
 echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(grep -oP '(?<=UBUNTU_CODENAME=).*' /etc/os-release || lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
 sudo apt update
 sudo apt-get install terraform
 3. Crear los archivos api.tf en carpeta iac