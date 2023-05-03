FROM python:3.11.3-bullseye

ENV NODEJS_SERVICE_URL="nodejs-service:3000"

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 8080

CMD ["python3", "-m" , "flask", "run", "-p", "8080", "--host", "0.0.0.0"]
