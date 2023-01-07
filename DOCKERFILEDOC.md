# DOCKERFILE command

## COPY & ADD：能把local的文件複製到image內, 如果目錄不存在，則會自動創建

## ADD比COPY好一點的地方是：複製一個gzip時，會順便解壓縮

## WORDIR：切換到該目錄底下，如果目錄不存在，則自動創建

## ARG : declare a parameter which only used in building image

## ENV : declare a parameter which can be used in container

## CMD : run container 時默認執行的命令, 如果再docker run時另外有指定其他命令，則此命令會被忽略

## ENTRYPOINT : 和CMD類似

## 建置image時，可為該image建立一個特別用戶，避免其他人利用進入container內用root權限進行操作