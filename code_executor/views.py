from django.shortcuts import render
import subprocess
import tempfile
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def run_code(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        code = data.get('code', '')
        input_data = data.get('input', '')

        with tempfile.NamedTemporaryFile(mode='w+', suffix='.py', delete=False) as temp:
            temp.write(code)
            temp.flush()
            try:
                result = subprocess.run(
                    ['python', temp.name],
                    input=input_data.encode('utf-8'),
                    stdout=subprocess.PIPE,
                    stderr=subprocess.PIPE,
                    timeout=5
                )
                return JsonResponse({
                    'stdout': result.stdout.decode('utf-8'),
                    'stderr': result.stderr.decode('utf-8')
                })
            except subprocess.TimeoutExpired:
                return JsonResponse({'stderr': 'Execution timed out'}, status=400)


def code_editor(request):
    return render(request, 'code_executor/editor.html')