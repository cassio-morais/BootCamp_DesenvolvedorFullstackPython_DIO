from zeep import Client
# A fast and modern Python SOAP client

client = Client ('http://www.soapclient.com/xml/soapresponder.wsdl') 
# cria instância do WSDL
result = client.service.Method1('teste','teste')
# <message name="Method1">
# <part name="bstrParam1" type="xsd:string"/>
# <part name="bstrParam2" type="xsd:string"/>
print(result)
# resposta: Your input parameters are teste and teste
