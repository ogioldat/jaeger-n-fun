FROM python:3.11.3-bullseye

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 8080

CMD ["python3", "-m" , "flask", "run", "-p", "8080", "--host", "0.0.0.0"]
