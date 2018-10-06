#! /bin/bash

if [ $# -lt 1 ]; then
	echo "Please input egret version"
fi

VERSION=$1

declare -a PRJ=(
    "agora"
#    "base64texture"
    "benchmark"
#    "dcagent"
    "ecs"
    "gesture"
    "greensock"
    "jszip"
    "keyboard"
#    "matchvs"
    "md5"
    "mouse"
    "particle"
    "physics"
    "socket.io"
    "tiled"
    "weixinapi"
#    "youmi"
    )

for N in "${PRJ[@]}"
do
    echo $N
    P=${N}/libsrc
    rm -rf ${P}/bin
    pushd ${P} > /dev/null
    egret build ${N} -ev ${VERSION}
    popd > /dev/null
done
