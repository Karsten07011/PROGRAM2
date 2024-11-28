import selenium as se
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

driver = webdriver.Chrome()

while True:
    driver.get('https://www.google.com')
    time.sleep(5)
    driver.get('https://www.bing.com')
    time.sleep(5)  
    driver.get('https://www.yahoo.com')
    time.sleep(5)
```