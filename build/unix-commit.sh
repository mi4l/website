DIRECTORY=$1
EXPORT_NAME=$2
OUTPUT_FILE_PATH=$3
FILE_CONTENT="export const DIRECTORY_CACHE_ = {"

if test -f "${OUTPUT_FILE_PATH}"; then
    rm ${OUTPUT_FILE_PATH}
fi

for directory in ${DIRECTORY} ; do
  if git ls-files ${directory}
  then
    FILE_CONTENT=${FILE_CONTENT}'"'${directory}'": "'$(git log -n 1 --pretty=format:%ct ${directory})'",'
  fi
done

echo ${FILE_CONTENT}'};' > ${OUTPUT_FILE_PATH}
