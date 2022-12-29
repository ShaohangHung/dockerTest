# DOCKERFILE command

## COPY & ADD：能把local的文件複製到image內, 如果目錄不存在，則會自動創建

## ADD比COPY好一點的地方是：複製一個gzip時，會順便解壓縮

## WORDIR：切換到該目錄底下，如果目錄不存在，則自動創建

## ARG : declare a parameter which only used in building image

## ENV : declare a parameter which can be used in container
