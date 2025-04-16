#!/bin/bash

# 检查是否提供了博文标题作为参数
if [ -z "$1" ]; then
  echo "用法: $0 \"您的博文标题\""
  exit 1
fi

POST_TITLE="$1"
POSTS_DIR="_posts"
TZ='Asia/Shanghai' DATE=$(date "+%Y-%m-%d")
TZ='Asia/Shanghai' TIME=$(date "+%H:%M:%S %z")
SLUG=$(echo "$POST_TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^[:alnum:][:space:]-]//g' | sed 's/[[:space:]]/-/g')
FILENAME="$DATE-$SLUG.md"
FILEPATH="$POSTS_DIR/$FILENAME"

FRONT_MATTER="---
title: $POST_TITLE
date: $DATE $TIME
categories: [Algorithm, Leetcode, Daily]
tags: [DP]     # TAG names should always be lowercase
---
"

# 创建 _posts 目录如果不存在
mkdir -p "$POSTS_DIR"

# 创建新的博文文件并写入 Front Matter
echo "$FRONT_MATTER" >"$FILEPATH"

echo "博文已创建: $FILEPATH"
