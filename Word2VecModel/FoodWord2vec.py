from gensim.models import Word2Vec

def foodKeyWord(name, nameList):
    if name == "불닭볶음면":
        file_name = "/home/LG/Word2VecModel/BULDAKNNFINALmodel"
    elif name == "마시는 홍초":
        file_name = "/home/LG/Word2VecModel/hongchoNNmodel"
    elif name == "신라면":
        file_name = "/home/LG/Word2VecModel/SHINRAMENNNmodel"

#     file_name = "/home/LG/Word2VecModel/BULDAKNNFINALmodel"
    
    
    product_list = nameList
#     file = "Word2VecModel/BULNNmodel"
    model = Word2Vec.load(file_name)
    products = {}
    pro_list = []
    for product in product_list :
        little_products = {}
        array = []
        little_products["name"] = product
        array2 = []
        model_result2 = model.wv.most_similar(positive=[product], topn=10)
        if model_result2:
            for model_item in model_result2:
                array.append(model_item[0])
                array2.append(model_item[1])
                print(model_item)
            if array:
                little_products["surrounding"] = array
                little_products["surroundingNumber"] = array2
        pro_list.append(little_products)
        
    products["food_keyword"] = pro_list

#     result_array = []
#     for model in model_result2:
#         result_array.append(model[0])
    
    return products