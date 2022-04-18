FROM openjdk:8-jre

WORKDIR /app
ADD ./otp-1.5.0-shaded.jar .

EXPOSE 8080 8081


# ENTRYPOINT ["java","-Xmx2G","-jar","otp-1.5.0-shaded.jar","--build","./graphs","--inMemory"]

ENTRYPOINT ["java","-Xmx2G","-jar","otp-1.5.0-shaded.jar","--autoReload","--autoScan","--basePath","graphs","--graphs","graphs","--server"]