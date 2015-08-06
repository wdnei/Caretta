# Caretta app
###criado por Wdnei Paixão

##Sobre
Caretta surgiu da necessidade de expandir o mapeamento de atividades que envolvam tartarugas marinhas. Pescadores, surfistas e frequentadores de praias
agora podem ajudar projetos de conservação marinha como o Tamar através de um aplicativo mobile.
Este é um projeto criado a partir da disciplina de Laboratório de Engenharia de Software ministrada por Paulo Sérgio.


##Instalar ambiente
	1. Instalar Node.js
	2 $npm install -g cordova ionic
        2. pela linha de comando e na pasta do projeto "carettaapp" instalar as dependencias:
		$ npm install

	3. pela linha de comando e na pasta do projeto "carettaapp" ativar o servidor:
	    $ ionic serve --lab

##Instalar Servidor Loopback
baixar projeto em <https://github.com/wdnei/carettalb>

##Instalar prototipo
	1. Instalar Ionic App
	2. abrir o caretta pelo id :f4907506


##Debugar
    1. Na pasta do App Ionic e gere o arquivo .apk android
    2. $ ionic add platform android
    3. $ cordova build
    4. Instalar no device android
    5. $  "C:\Program Files (x86)\Android\android-studio\sdk\platform-tools\adb.exe" install d:\Ionic\caretta\carettaapp\platforms\android\build\outputs\apk\android-debug.apk

    6. Então abrir o Chrome pelo link
    7.  chrome://inspect/#devices
    8. Abrir o app no device e ele aparecerah no chrome para ser debugado.
