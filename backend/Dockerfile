# イメージ設定
FROM eclipse-temurin:21.0.1_12-jdk

# プロジェクトをビルド
WORKDIR /app
COPY . /app
RUN ./gradlew build

# rootless設定
# 後回し
# ARG UID=1001
# ARG GID=1001
# RUN useradd -u $UID -o -m myuser
# RUN groupmod -g $GID -o myuser

# 実行
# 習ったので使ってみる
# EXPOSE 3000
ENTRYPOINT ["java", "-jar"]
CMD ["build/libs/backend-0.0.1-SNAPSHOT.jar"]