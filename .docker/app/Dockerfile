FROM node:21-alpine3.18 as base

LABEL com.sqd.maintainer='Abel Seminario Leon <e3corpion@gmail.com>'

WORKDIR /app

COPY package.json package-lock.json /app/

RUN \
    apk add git \
    && apk add vim 

FROM base as cli

RUN \
    apk add make \
    && npm install -g \
    #jsonlint
    jsonlint@^1.6 \
    #cspell
    cspell@^8.3.2 \
    @cspell/dict-git@^3 \
    @cspell/dict-npm@^5.0.15 \
    @cspell/dict-sql@^2.1.3 \
    @cspell/dict-aws@^4.0.1 \
    @cspell/dict-node@^4.0.3 \ 
    @cspell/dict-en_us@^4.3.17 \
    @cspell/dict-es-es@^2.3.1 \
    @cspell/dict-companies@^3.0.29 \
    @cspell/dict-software-terms@^3.3.15 \
    #markdownlint
    markdownlint-cli@^0.32.2

FROM base as http-debug 