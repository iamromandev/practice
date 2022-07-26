FROM python:3.10

ARG DEPLOY_ENV=local

ENV DEPLOY_ENV=${DEPLOY_ENV} \ 
    # python
    PYTHONFAULTHANDLER=1 \
    PYTHONUNBUFFERED=1 \
    PYTHONHASHSEED=random \
    # pip
    PIP_NO_CACHE_DIR=off \
    PIP_DISABLE_PIP_VERSION_CHECK=on \
    PIP_DEFAULT_TIMEOUT=100 \
    # poetry
    POETRY_VERSION=1.1.13 \
    POETRY_VIRTUALENVS_CREATE=false \
    POETRY_CACHE_DIR='/var/cache/pypoetry'

WORKDIR /code

COPY ./pyproject.toml ./poetry.lock /code/

RUN pip install "poetry==$POETRY_VERSION"
RUN poetry install $(test "$DEPLOY_ENV" == production && echo "--no-dev") --no-interaction --no-ansi

COPY . /code

