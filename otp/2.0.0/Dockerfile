FROM openjdk:11-jre

WORKDIR /app
ADD ./otp-2.0.0-shaded.jar .

EXPOSE 8080 8081


ENTRYPOINT ["java","-Xmx2G","-jar","otp-2.0.0-shaded.jar","--load","./graphs"]