from pywikihow import RandomHowTo
from urllib.parse import unquote
import json

out = open('guides.txt', 'a')

for j in range(1):
    how_to = RandomHowTo(lang='ru')

    result = {}
    result['name'] = 'Как ' + unquote(how_to.title)

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
            result['preview'] = step['picture']
    result['text'] = text
    result_json = json.dumps(result)
    print(result_json, file=out)

out.close()
