FROM alpine:3.2
MAINTAINER  SvenDowideit@home.org.au 

RUN apk update && \
    apk add socat && \
    rm -r /var/cache/

RUN echo "Test file contents. HELLO THERE WORLD! I am talking to you from the legacy app on port 9001" > myFile.txt

EXPOSE 9001
	
CMD socat TCP-LISTEN:9001,fork,reuseaddr SYSTEM:"cat myFile.txt" | sh
