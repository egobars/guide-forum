from pywikihow import RandomHowTo
from urllib.parse import unquote
import requests
from requests.structures import CaseInsensitiveDict
import json

how_to = RandomHowTo(lang='ru')

result = {}
result['title'] = 'Как ' + unquote(how_to.title)

text = ''
text += '# Как ' + unquote(how_to.title) + '\n'
text += how_to.intro + '\n'
text += '\n'

for i in range(how_to.n_steps):
    step = how_to.steps[i].as_dict()
    text += '## ' + step['summary'] + '\n'
    text += '![guide_picture](' + step['picture'] + ')' + '\n'
    text += '\n'
    text += step['description'] + '\n'
    text += '\n'
    if i == 0:
        result['preview'] = [step['picture']]

result['text'] = text
print(result['title'])
print(result['preview'])
print(result['text'])

result['theme'] = [input()]

result['user'] = {'username': 'adm'}

url = "https://guidesplatform-production.up.railway.app/Guide/create"

headers = CaseInsensitiveDict()
headers["Content-Type"] = "application/json"

data =
{
  "preview": [
    result['preview']
  ],
  "text": result['text'],
  "theme": [
    result['theme']
  ],
  "title": result['title'],
  "user": {
    "username": "aaa"
  }
}


print(result)

resp = requests.post(url, headers=headers, json=json.dumps(result))

print(resp.status_code)
