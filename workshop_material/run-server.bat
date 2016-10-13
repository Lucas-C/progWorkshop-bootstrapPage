:: !WARNING! A strict firewall can block Python from launching a local server

SET PATH=%PATH%;%LOCALAPPDATA%\Programs\Python\Python35-32

explorer http://localhost/website
python -m http.server 80

pause
