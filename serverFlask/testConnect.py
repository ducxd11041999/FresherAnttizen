import serial

import time


serialcomm = serial.Serial('COM7', 19200)

serialcomm.timeout = 1

while True:

    i = input("Enter Input: ").strip()

    if i == "Done":

        print('finished')

        break

    serialcomm.write(i.encode())

    time.sleep(0.5)

    print(serialcomm.readline().decode('ascii'))

serialcomm.close()