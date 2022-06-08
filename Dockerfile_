FROM ubuntu:latest

ENV DEBIAN_FRONTEND="noninteractive"

ENV DE_RELEASE_VERSION=nightly
ENV BASE_URL_DE_RELEASE=https://github.com/LordOfDragons/dragengine/releases/download/$DE_RELEASE_VERSION

RUN apt update \
 && apt -y install curl bzip2 \
 && rm -rf /var/lib/apt/lists/*

RUN curl -sL -o install-dragengine-ci.sh $BASE_URL_DE_RELEASE/install-dragengine-ci-nightly-linux64.sh \
 && curl -sL -o install-deigde-ci.sh $BASE_URL_DE_RELEASE/install-deigde-ci-nightly-linux64.sh \
 && chmod 755 install-dragengine-ci.sh install-deigde-ci.sh \
 && ./install-dragengine-ci.sh --yes \
 && ./install-deigde-ci.sh --yes \
 && rm install-dragengine-ci.sh install-deigde-ci.sh

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
