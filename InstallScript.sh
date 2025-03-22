runningscript=true
sudo expand_rootfs

while $runningscript; do
echo "For better documentation please go to github.com/ading2210/shimboot"
echo "Choose what you want to install:"
echo "0. Exit"
echo "1. Wine"
echo "2. Steam"
echo "3. Chrome"
echo "4. Bluetooth GUI"
echo "5. Change Your Password"
echo "6. Neofetch"
read optionnum

if [ $optionnum -eq 1 ]; then
echo "Installing Wine..."

sudo apt install wine64 -y
sudo apt install wine32 -y
sudo apt install winetricks -y
elif [ $optionnum -eq 2 ]; then
sudo apt install steam -y
steam
elif [ $optionnum -eq 3 ]; then
sudo apt install curl
echo "1. x86 Chromebook"
echo "2. Arm Chromebook"
read chromebook
if [ $chromebook -eq 1 ]; then
curl --output chrome.deb https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt-get install ./chrome.deb
else
curl --output arm.zip https://www.googleapis.com/download/storage/v1/b/chromium-browser-snapshots/o/Arm%2F100014%2Fchrome-linux.zip?generation=1&alt=media
unzip arm.zip
cd chrome-linux
chmod u+x ./chrome
./chrome
fi
elif [ $optionnum -eq 4 ]; then
sudo apt install bluetooth -y
sudo apt install blueman -y
elif [ $optionnum -eq 5 ]; then
passwd user
elif [ $optionnum -eq 6 ]; then
sudo apt install neofetch
neofetch
elif [ $optionnum -eq 0 ]; then
runningscript=false
else
echo "Please Enter a number 0-6"
fi
done