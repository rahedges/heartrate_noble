cmd_Release/l2cap-ble := flock ./Release/linker.lock g++ -pthread -rdynamic -m32  -o Release/l2cap-ble -Wl,--start-group ./Release/obj.target/l2cap-ble/src/l2cap-ble.o -Wl,--end-group -lbluetooth
